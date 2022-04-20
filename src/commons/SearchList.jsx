import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getAllRecruiters } from "../store/recruiters";
import SpinnerComp from "./Spinner";

const SearchList = () => {
  const searchResult = useSelector((state) => state.recruiter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecruiters());
  }, []);

  //   console.log("LIST", searchResult)

  if (searchResult.loading) return <SpinnerComp />;

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Description</th>
            <th>Area</th>
            <th>Active Searchs</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.data.map((recruiter) => (
            <tr key={recruiter.id}>
              <td>{recruiter.id}</td>
              <td>{recruiter.name.firstname}</td>
              <td>{recruiter.name.lastname}</td>
              <td>{recruiter.address.city}</td>
              <td>{recruiter.email}</td>
              <td>{recruiter.phone}</td>
              <td>{recruiter.address.zipcode}</td>
              <td>{recruiter.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SearchList;
