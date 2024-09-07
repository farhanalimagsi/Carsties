
'use client'
import AuctionCards from './AuctionCards';
import AppPagination from '../components/AppPagination';
import { useEffect, useState } from 'react';
import { Auction, PagedResult } from '@/types';
import { getData } from '../actions/auctionsActions';
import Filters from './Filters';
import {useParamsStore} from '@/hooks/useParamsStore';
import { useShallow } from 'zustand/react/shallow';
import queryString from 'query-string';
import EmptyFilter from '../components/EmptyFilter';


export default function Listings() {
  const [data, setData] = useState<PagedResult<Auction>>();
  const params = useParamsStore(useShallow (state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    filterBy: state.filterBy

  })));

  const setParams = useParamsStore(state => state.setParams);
  const url = queryString.stringifyUrl({url: '', query: params})

  function setPageNumber(pageNumber: number) {
    setParams({pageNumber})
  }

  useEffect(()=>{
    getData(url).then(data =>{
      setData(data);
    })
  }, [url])

  if (!data) return <h3>Loading.....</h3>
  
  return (
    <>
      <Filters />
      {data.totalCount === 0 ? (
        <EmptyFilter showReset/>
      ) : (
        <>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {data.results.map((auction)=>(
              <AuctionCards auction={auction} key={auction.id}/>
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <AppPagination 
              pageCount={data.pageCount}
              currentPage={params.pageNumber}
              pageChanged={setPageNumber}
            />
          </div>
        </>
      )}
    </>
    
  )
}
