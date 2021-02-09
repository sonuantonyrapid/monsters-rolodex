import React, {useEffect,useRef, useState} from "react";

import "./search-box.styles.css";



const SearchBox = React.memo(props => {

    const inputRef = useRef();
    const [searchData,setSearchData] = useState('');

    useEffect(()=>{

        const timeOut = setTimeout(()=>{

            if(searchData === inputRef.current.value){

                if(searchData != props.searchData){

                    props.searchHandler(searchData);

                }


            }
        
        },500);

        return ()=>{
            
            clearTimeout(timeOut);

        }

    },[searchData,inputRef]);


    const searchDataHandler = (event) =>{

        let data = event.target.value.trim();

        setSearchData(data);
        
    };


    return <input ref={inputRef} className="search" type="search" onChange={event=>searchDataHandler(event)} value={searchData}/>;

});

export default SearchBox;