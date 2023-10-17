import { useEffect } from 'react'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const cakePriceBusd = useCakeBusdPrice()
  useEffect(() => {
    const cakePriceBusdString = cakePriceBusd ? cakePriceBusd.toFixed(2) : ''
    document.title = `Venos Stakify - ${cakePriceBusdString}`
  }, [cakePriceBusd])
}
export default useGetDocumentTitlePrice
