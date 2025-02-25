interface LoadingProps {
  size?: number
  color?: string
  stroke?: number
}

export default function Loading({ size = 24, color = 'black', stroke = 2 }: LoadingProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderWidth: 0,
        borderTopWidth: stroke,
        borderColor: 'currentcolor',
        color
      }}
      className='animate-spin rounded-full'
    ></div>
  )
}
