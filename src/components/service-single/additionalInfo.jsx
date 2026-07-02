import Link from "next/link";




export const AdditionalInfo = ({ data }) => {
  return (
    <section>
      <div className="mb-[100px] text-center">
        <p className="mb-4 font-medium uppercase">TOP INTEGRATION</p>
        <h2 className="mb-10 max-lg:mb-10">{data.title}</h2>
        <p className="mx-auto mb-12 max-w-5xl max-lg:mb-10">
          {data.description}
        </p>
        <Link href={data.link} className="btn">
          {data.ctaButton}
        </Link>
      </div>
    </section>
  );
};
