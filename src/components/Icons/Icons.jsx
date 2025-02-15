import { Button, Box, Typography } from '@mui/material';

export default function Icons({
  height = '100%',
  width = '100%',
  onClick = () => {},
  backgroundColor = '#F8F8F8',
  borderRadius = 3,
  border = '1px solid #EBEBEB',
  icon = null,
  disabled = false,
  text = '',
  textPosition = 'left',
  ...restProps
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        height,
        width,
        background: backgroundColor,
        border,
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        gap: 1,
        overflow: 'hidden',
        padding: 2,
        ...restProps,
      }}
    >
      {textPosition === 'left' ? (
        <>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography variant='h6' fontWeight='bold'>
              {text}
            </Typography>
          </Box>
          {icon}
        </>
      ) : (
        <>
          {icon}
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography variant='h6' fontWeight='bold'>
              {text}
            </Typography>
          </Box>
        </>
      )}
    </Button>
  );
}
