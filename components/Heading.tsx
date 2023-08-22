type Props= {
    children: string | JSX.Element | JSX.Element[]
}

export default function Heading({children}:Props) {
    return(
        <h1 className="text-4xl max-sm:text-3xl text-bluedark font-bold">{children}</h1>
    );
}