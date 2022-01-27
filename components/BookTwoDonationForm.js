function BookTwoDonationForm() {
  return (
    <form className="donation-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="TWACB3B43E4PY" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      <style jsx>{`
        @import theme;

        .donation-form {
          text-align: center;
          margin-top: -0.5em;
          padding-top: 6px;
          background: transparent;
          border: 1px solid transparent;
          animation: flash-border linear 8s infinite;
          filter: saturate(100%);
        }

        @keyframes flash-border {
          10%,
          14%,
          18% {
            background: transparent;
            border-color: transparent;
            filter: saturate(100%);
          }
          12%,
          16% {
            background: rgba(color-txt, 5%);
            border-color: rgba(color-txt, 10%);
            filter: saturate(200%);
          }
        }
      `}</style>
    </form>
  );
}

export default BookTwoDonationForm;
