
type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods, additional: string[]) => {
  debugger
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key)
  ]
    .join(' ')
}
