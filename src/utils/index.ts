export function classNames(...classes: string[]): string | undefined {
  return classes.filter(Boolean).join(' ');
}
