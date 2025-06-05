import {
  IconButton,
  InputAdornment,
  Slide,
  TextField,
  Tooltip,
  Box,
  useMediaQuery,
  type Theme,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onSearch: (query: string) => void;
}

export default function SearchInput({
  searchQuery,
  setSearchQuery,
  onSearch,
}: Props) {
  const { t } = useTranslation("task_board_page");
  const [showSearch, setShowSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const toggleSearch = () => {
    if (isMobile) {
      setMobileOpen(true);
    } else {
      setShowSearch((prev) => !prev);
    }
  };

  useEffect(() => {
    if ((showSearch || mobileOpen) && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch, mobileOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const MobileSearchDialog = (
    <Dialog open={mobileOpen} onClose={() => setMobileOpen(false)} fullWidth>
      <DialogContent>
        <TextField
          fullWidth
          inputRef={searchInputRef}
          placeholder={t("search_tasks...")}
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <IconButton onClick={clearSearch} edge="end">
                <HighlightOffIcon />
              </IconButton>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setMobileOpen(false)}>{t("Close")}</Button>
      </DialogActions>
    </Dialog>
  );

  const DesktopSearch = (
    <Box
      sx={{
        width: showSearch ? 240 : 40,
        transition: "width 0.9s ease",
        overflow: "hidden",
      }}
    >
      {showSearch ? (
        <Slide direction="right" in={showSearch} mountOnEnter unmountOnExit>
          <TextField
            inputRef={searchInputRef}
            placeholder={t("search_tasks...")}
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={() => searchQuery === "" && setShowSearch(false)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <IconButton onClick={clearSearch} size="small" edge="end">
                  <HighlightOffIcon fontSize="small" />
                </IconButton>
              ),
            }}
            sx={{ width: 210 }}
          />
        </Slide>
      ) : (
        <Tooltip title={t("search")} enterDelay={1000}>
          <IconButton onClick={toggleSearch} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={toggleSearch} aria-label="search">
            <SearchIcon />
          </IconButton>
          {MobileSearchDialog}
        </>
      ) : (
        DesktopSearch
      )}
    </>
  );
}
