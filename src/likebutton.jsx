import React from 'react'

function likebutton() {
    const [like,setlike]=React.useState(0)
    function count(){
        if(like <1){
            setlike(like+1)
    }
    else{
        setlike(0)
    }
}
  return (
    <div>
<span
    style={{
        fontsize:"500px",
        cursor:"pointer"
    }}
    onClick={count}
    >
     ❤️

</span>
 <h1>Likes:{like}</h1>
    </div>
  )
}

export default likebutton