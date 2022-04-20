import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Pagination from "react-bootstrap/Pagination"
import { pageChange } from "../store/page"

const PaginationComp = ({ pagesTotal }) => {
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()

  let active = page
  let num = 1

  if (active > 5 && active < 11) num = 6
  if (active > 10 && active < 16) num = 11
  if (active > 15 && active < 21) num = 16
  if (active > 20 && active < 26) num = 21
  if (active > 25 && active < 31) num = 26
  if (active > 30 && active < 36) num = 31
  if (active > 35 && active < 41) num = 36
  if (active > 40 && active < 46) num = 41
  if (active > 45 && active < 51) num = 46
  if (active > 50 && active < 56) num = 51
  if (active > 55 && active < 61) num = 56
  if (active > 60 && active < 66) num = 61
  if (active > 65 && active < 71) num = 66

  let numMult = num + 4
  if (numMult > pagesTotal) numMult = pagesTotal
  let items = []

  for (let number = num; number <= numMult; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleSelect(number)}
      >
        {number}
      </Pagination.Item>
    )
  }

  const handleSelect = number => {
    dispatch(pageChange({ page: number }))
  }

  const handleFirst = () => {
    dispatch(pageChange({ page: 1 }))
  }

  const handlePrev = () => {
    dispatch(pageChange({ page: page - 1 }))
  }

  const handleNext = () => {
    dispatch(pageChange({ page: page + 1 }))
  }

  const handleLast = () => {
    dispatch(pageChange({ page: pagesTotal }))
  }

  return (
    <>
      <div className="PaginationComp mt-5 mb-4 d-flex justify-content-center">
        <Pagination>
          <Pagination.First
            onClick={() => {
              handleFirst()
            }}
            disabled={active === 1}
          />
          <Pagination.Prev
            onClick={() => {
              handlePrev()
            }}
            disabled={active === 1}
          />
          {items}
          <Pagination.Next
            onClick={() => {
              handleNext()
            }}
            disabled={active === pagesTotal}
          />
          <Pagination.Last
            onClick={() => {
              handleLast()
            }}
            disabled={active === pagesTotal}
          />
        </Pagination>
      </div>
    </>
  )
}

export default PaginationComp