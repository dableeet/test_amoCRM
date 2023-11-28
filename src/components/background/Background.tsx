export function Background() {
  const elements: string[] = [
    'glass-gradient',
    'purple-ball',
    'red-ball',
    'red-ball small',
    'purple-light',
    'red-light',
    'yellow-light',
    'yellow-ball',
  ];

  return (
    <div id="background" className="-z-10 relative overflow-y-hidden">
      {elements.map((className) => (
        <div key={crypto.randomUUID()} className={className} />
      ))}
    </div>
  );
}
