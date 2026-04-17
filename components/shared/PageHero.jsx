import FadeUpAnimation from "../animations/FadeUpAnimation";

const PageHero = ({ subtitle, title, paragraph, link }) => {
  const renderParagraphs = (text) => {
    if (!text) return null;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim());
    return paragraphs.map((para, idx) => (
      <p key={idx} className="mb-4 last:mb-0">
        {para}
      </p>
    ));
  };

  return (
    <section className="hero relative overflow-hidden pt-24">
      <div className="container">
        <FadeUpAnimation className="mx-auto max-w-[948px] text-center">
          {subtitle && (
            <p className="mb-4 font-medium capitalize">{subtitle}</p>
          )}
          {title && (
            <h1
              className="mb-10 max-lg:mb-10"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          )}
          {paragraph && (
            <div className="mx-auto mb-12 max-w-5xl max-lg:mb-10">
              {renderParagraphs(paragraph)}
            </div>
          )}
          {link && (
            <a href={link} className="btn btn-primary">
              Get Started
            </a>
          )}
        </FadeUpAnimation>
      </div>
    </section>
  );
};

export default PageHero;