type ItemNavegationProps = {
    className: string;
    href: string;
    name: string;
  };

export const ItemNavegation = ({ className, href, name }: ItemNavegationProps) => {
    return (
      <a href={href} className={className}>
        {name}
      </a>
    );
};