const Map = () => {
  return (
    <div className="flex flex-col m-auto  w-full md:w-3/4  md:flex-row my-8 gap-6">
      <div className="flex items-center justify-center border-2 border-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11811.316310917078!2d-82.9628728!3d42.2608225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b296a6f7c4351%3A0x800cb84cd69bab49!2sCasagrande%20Granite%20%26%20Marble%20Ltd!5e0!3m2!1sen!2sca!4v1697933416047!5m2!1sen!2sca"
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div className="flex  flex-col items-center justify-center h-full ">
          <h2>Casagrande Granite and Marble Ltd.</h2>
          <h3>4251 Consession Rd. 7</h3>
          <h3>R.R. #1</h3>
          <h3>Windsor, Ontario</h3>
          <h3>N9A 6J3</h3>
          <h3>Phone: 519-974-9321</h3>
          <h3>Phone: 519-974-9324</h3>
          <p className="pt-8 w-1/2">
            If you have any questions or comments about granite, marble, quartz,
            our fabrication process, or our installation services, please feel
            free to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Map;
