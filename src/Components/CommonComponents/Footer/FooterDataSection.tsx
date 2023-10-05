import Link from "next/link";

const FooterDataSection = ({ sectionData }: any) => {
    return (
        <div className="mb-4 ml-8">
            <h4 className="text-secondary text-[18px] font-semibold">
                {sectionData.head}
            </h4>
            <ul className="list-none list-inside mt-10">
                {sectionData.titles.map((item: any, titleIndex: number) => (
                    <li key={titleIndex} className="text-light my-2 font-[700] text-[13px] leading-[20px]">
                        <Link href={`/services/${item.link}`} className="hover:text-secondary">
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterDataSection;