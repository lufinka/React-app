import React from 'react'

const left = (value,i) => {
    return (
        {(i == 0 && value.categoryCode == '') ? (<li className="active">{value.categoryName}</li>) :
            (<li>{value.categoryName}</li>)
}
)
}
export default left;