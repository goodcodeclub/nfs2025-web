type CtaProps = {
    title?: string;
    highlight?: string;
    subtext?: string;
    postRoleText?: string;
    findTalentText?: string;
};

export default function Cta({
    title = "Title",
    highlight = "Future Team",
    subtext = "Find motivated early-career talent to power your company's next stage of growth.",
    postRoleText = "Post a Role",
    findTalentText = "Find Talent"
}: CtaProps) {

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-block">
                    <h2 className="cta-title">
                        {title} <span className="cta-highlight">{highlight}</span>.
                    </h2>
                    <p className="cta-subtext">
                        {subtext}
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-outline-light">{postRoleText}</button>
                        <button className="btn btn-primary">{findTalentText}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
