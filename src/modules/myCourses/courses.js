import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import { history } from "../../managers/history";

const useStyles = makeStyles({
  tableContainer: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

function Courses({ activatedProjects, isloading }) {
  const classes = useStyles();

  const redirectToProjectDetails = (projectId) => {
    history.push(`/project-details/${projectId}`);
  };

  return (
    <div className="component-min-h px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 bg-white-50">
      <div className="font-PoppinsMedium text-black-100 text-ft8 pt-27px md:pt-33px mb-15px md:mb-45px">
        My Courses
      </div>
      <TableContainer
        className={`p-1 ${isloading ? classes.tableContainer : ""}`}
      >
        <Table
          sx={{ minWidth: 856, overflow: "hidden" }}
          aria-label="simple table"
          className=" rounded-lg"
        >
          <TableHead className="bg-white-50">
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="left"
                className="py-1 pl-12 font-PoppinsMedium fontWeight  text-black-50 text-ft3"
              >
                Project Name
              </TableCell>
              <TableCell
                align="left"
                className="py-1 font-PoppinsMedium fontWeight  text-black-50 text-ft3"
              >
                Activated On
              </TableCell>
              <TableCell
                align="left"
                className="py-1 font-PoppinsMedium fontWeight  text-black-50 text-ft3"
              >
                Tasks Completed
              </TableCell>
              <TableCell
                align="left"
                className="py-1 font-PoppinsMedium fontWeight  text-black-50 text-ft3"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="shadow-xs rounded-lg bg-white-100">
            {activatedProjects &&
              activatedProjects.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th ": { border: 0 },
                    borderBottom: "1px solid #EAEAEA",
                  }}
                  className={
                    // index === activatedProjects?.length - 1
                    // ? "border-b-0 cursor-pointer"
                    "border-table cursor-pointer"
                  }
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className={`font-PoppinsMedium text-blue-250 text-ft4 pl-10 ${
                      ""
                      // index === activatedProjects?.length - 1 ? `pl-13` : `pl-9`
                    }`}
                    onClick={() => redirectToProjectDetails(row.projectId)}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="left"
                    className="font-PoppinsMedium text-black-100 text-ft4"
                  >
                    {moment(row.addedOn).format("LT")},{" "}
                    {moment(row.addedOn).format("DD MMM YYYY")}
                  </TableCell>
                  <TableCell
                    align="left"
                    className="font-PoppinsMedium text-black-100 text-ft4"
                  >
                    {row.completedTasks}/{row.totalTasks}
                  </TableCell>
                  <TableCell
                    align="left"
                    className="font-PoppinsMedium text-black-100 text-ft4"
                  >
                    {row.completedTasks === row.totalTasks
                      ? "Completed"
                      : "Pending"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isloading ? (
        <div className="flex items-center justify-center h-183px w-full bg-white-100 rounded-lg shadow-xs">
          <div className="">
            <CircularProgress />
          </div>
        </div>
      ) : (
        ""
      )}
      {!isloading &&
      (activatedProjects?.length === 0 || activatedProjects === undefined) ? (
        <div className="w-1196px h-183px bg-white-100 rounded-lg shadow-xs flex items-center justify-center font-PoppinsMedium text-black-50 text-ft4">
          No Active Courses
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Courses;
