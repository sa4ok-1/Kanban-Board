import { Paper, Box } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type TaskListSkeletonProps = {
  viewMode: 'list' | 'grid';
};

export default function TaskListSkeleton({ viewMode }: TaskListSkeletonProps) {
  const skeletonCount = 4;
  const skeletonHeight = viewMode === 'grid' ? 180 : 100;

  return (
    <Paper
      sx={{
        overflowY: 'auto',
        boxShadow: 'none',
        flex: 1,
        display: viewMode === 'list' ? 'flex' : 'grid',
        flexDirection: viewMode === 'list' ? 'column' : undefined,
        gap: 2,
        gridTemplateColumns:
          viewMode === 'grid'
            ? 'repeat(auto-fill, minmax(250px, 1fr))'
            : undefined,
        gridAutoRows: viewMode === 'grid' ? 'minmax(150px, auto)' : undefined,
        p: 2,
        mb: 2,
      }}
    >
      {[...Array(skeletonCount)].map((_, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}
        >
          <Skeleton
            height={skeletonHeight}
            baseColor='#e0e0e0'
            highlightColor='#f5f5f5'
            duration={2.5}
            style={{ borderRadius: 16 }}
          />
        </Box>
      ))}
    </Paper>
  );
}
