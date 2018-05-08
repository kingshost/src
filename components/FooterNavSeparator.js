const FooterNavSeparator = () => (
  <span className="separator">
    <style jsx>{`
      @import theme;

      .separator {
        display: inline-block;
        width: 50px;
        height: 1px;
        background: rgba(color-txt, 10%);

        @media (min-width: 768px) {
          background: color-txt;
          margin: 0 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
    `}</style>
  </span>
);

export default FooterNavSeparator;
