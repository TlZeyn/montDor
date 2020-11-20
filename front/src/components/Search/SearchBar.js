import react from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyle = {width: "20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <input
        style={BarStyle}
        key="random1"
        value={keyword}
        placeholder={"Search a recette"}
        onChange={(e) => setKeyword(e.target.value)}
        />
    );
}