import React, { useEffect, useState } from 'react'
import AddSizes from '../component/AddSizes'
import Axios from '../utils/axios'
import SummaryApi from '../config/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import NoData from '../component/NoData'

const Size = () => {

    const[openAdd, setOpenAdd] = useState(false)
    const[data,setData] = useState([])
    const[loading,setLoading] = useState(false)

    const handleAdd = ()=>{
        setOpenAdd(true)
    }

    const fetchData = async ()=>{
        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.getSizes
            })
            const {data: responseData} = response
            if (responseData.success) {
                setData(responseData.data)
            }
        } catch (error) {
            AxiosToastError(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <section>
        <div className='flex justify-between shadow-sm px-3 py-2'>
            <div>Sizes</div>
            <button onClick={handleAdd} className='bg-[#787272] text-white px-2 py-1 rounded'>
                Add
            </button>
        </div>
        {!data[0] && !loading && (
            <NoData/>
        )}

        {
            data.map((s,index)=>{
                return(
                    <div>
                        {s.name}
                    </div>
                )
            })
        }
        

        {openAdd && <AddSizes close={()=>setOpenAdd(false)}/>}

    </section>
  )
}

export default Size