import React from 'react'

const useHover = () => {
  const [isHovered, setHovered] = React.useState(false)

  const bind = React.useMemo(
    () => ({
      onMouseEnter: (e) => setHovered(true),
      onMouseLeave: (e) => setHovered(false),
    }),
    []
  )

  return [isHovered, bind]
}

export default useHover
