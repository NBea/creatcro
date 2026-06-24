import "./Snippet.scss";

type SnippetProps = {
  children: React.ReactNode;
  bgClass?: string;
};


function Snippet({children, bgClass }: SnippetProps){
    return (

        <div className={`boxSnippet ${bgClass || ""}`}>
            <h2>{children}</h2>
        </div>
    );
}

export default Snippet;