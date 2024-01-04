export const Header = () => {
  return (
    <header className="bg-primary w-full">
      <picture>
        <source srcSet="/img/bg-header-desktop.svg" media="(min-width: 1240px)" />
        <img src="/img/bg-header-mobile.svg" alt="Header mobile" />
      </picture>
    </header>
  );
};
