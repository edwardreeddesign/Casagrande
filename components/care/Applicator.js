/* eslint-disable @next/next/no-img-element */
const Applicator = () => {
  return (
    <div>
      <h1 className="text-xl tracking-wider mb-2 font-semibold text-center">
        Casagrande Granite and Marble is an Accredited Applicator of
        Dry-Treat(TM) Sealing Products. Call for an appointment today.
      </h1>
      <div className="mt-10 mb-5 flex items-center justify-center flex-col">
        <img
          src="/images/care/Hanafin.jpg"
          alt="Hanafin products"
          className="mb-3"
        />
        <cite className="text-xs leading-[2px] ">
          Dry-Treat™ develops world leading impregnating sealers & enhancers for
          natural stone, bricks, pavers, tiles, engineering concrete & grout and
          Hanafinn™ safe, environmentally responsible specialty cleaners.
        </cite>
      </div>
      <div>
        <p className="mb-4">
          Dry-Treat impregnating sealer technology stands apart. The unique
          penetrating sealer molecules, hundreds of times smaller than those of
          competing stone sealers, delve much deeper into the pore structure,
          even in dense natural stones like granite. Within the pores, our
          specialized sealing molecules establish a permanent bond through
          chemical reactions, forming a substantial, deep barrier resistant to
          both oil and water.
        </p>
        <h3 className="mb-4 font-semibold">
          Dry-Treat™ Penetrating Sealer Technology
        </h3>
        <h4 className="font-semibold text-sm">
          Dry-Treat impregnating sealer technology is different.
        </h4>
        <p className="mb-4">
          This profound Dry-Treat barrier not only delivers exceptional surface
          stain protection but also guards against more severe forms of damage
          caused by water ingress, such as efflorescence, salt spalling,
          freeze-thaw spalling, picture framing, and curtails mold growth within
          the treated material.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <img src="/images/care/drytreat.jpg" alt="Sealer" />
      </div>
      <h3 className=" font-semibold">
        Dry-Treat impregnators provide superior protection.
      </h3>
      <h4 className="font-semibold text-sm mb-4">
        Super oil and water repellence = superior stain protection.
      </h4>
      <ul>
        <li>
          • Deeper penetration and permanent bonding = permanent PLUS premium
          protection from efflorescence, salt spalling, freeze-thaw spalling and
          picture framing.
        </li>
        <li>
          • For indoor and outdoor use on residential and commercial projects on
          floors, patios, entertaining areas, facades, cladding, pool surrounds
          and walls.
        </li>
        <li>
          • The penetrating sealers even stand up to commercial cleaning
          techniques e.g. high pressure hosing and maintains the slip resistance
          of the surface.
        </li>
      </ul>
      <cite className="text-xs font-light text-gray-400">
        Written 5, 15, 25 and 30 year performance warranties are available when
        our impregnating sealers are applied by a Dry-Treat Accredited
        Applicator.
      </cite>
    </div>
  );
};
export default Applicator;
