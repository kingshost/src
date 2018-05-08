const BookTwoDonationForm = () => (
  <form
    className="donation-form"
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
    target="_blank"
  >
    <input
      type="hidden"
      name="cmd"
      value="_s-xclick"
    />
    <input
      type="hidden"
      name="hosted_button_id"
      value="TWACB3B43E4PY"
    />
    <input
      type="image"
      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
      border="0"
      name="submit"
      alt="PayPal - The safer, easier way to pay online!"
    />
    <img
      alt=""
      border="0"
      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
      width="1"
      height="1"
    />
    <style jsx>{`
      .donation-form {
        padding-top: 6px;
      }
    `}</style>
  </form>
);

export default BookTwoDonationForm;
