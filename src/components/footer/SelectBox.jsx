import React from 'react'

function SelectBox({languages , label}) {
  return (
    <div className="select-box">
    <label htmlFor="" className="select-box-label">{label}</label>
    <select className="selecy-box-input"  name="" id="">
         {languages.map(item => <option key={item.id} value="">{item.value}</option> )}
    </select>
  </div>
  )
}

export default SelectBox