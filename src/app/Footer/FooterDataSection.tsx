const FooterDataSection = ({ sectionData }: any) => {
    return (
        <div className="mb-4 ml-8">
            <h2 className="text-[#31a2df] text-[20px] font-semibold">
                {sectionData.head}
            </h2>
            <ul className="list-none list-inside mt-10">
                {sectionData.titles.map((item: any, titleIndex: number) => (
                    <li key={titleIndex} className="text-gray-700 my-2 font-normal">
                        <a href={item.link} className="hover:text-blue-600">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterDataSection;