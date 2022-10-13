import React, { useState } from "react";
import Card from "./card";
import Filter from "../popup/filterPopup";
import FilterMobile from "../popup/filterMobile";
import CircularProgress from "@mui/material/CircularProgress";
import { history } from "../../managers/history";

const Dashboard = ({
  projectList,
  isloading,
  getProjects,
  filterMobile,
  setFilterMobile,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [projects, setProjects] = useState([]);
  const [types, setTypes] = useState([]);

  const handleProjects = (project) => {
    if (projects?.includes(project)) {
      const index = projects.indexOf(project);
      if (index > -1) {
        projects.splice(index, 1);
        setProjects((oldArray) => [...oldArray]);
      }
    } else {
      setProjects((oldArray) => [...oldArray, project]);
    }
  };

  const handleTypes = (type) => {
    if (types?.includes(type)) {
      const index = types.indexOf(type);
      if (index > -1) {
        types.splice(index, 1);
        setTypes((oldArray) => [...oldArray]);
      }
    } else {
      setTypes((oldArray) => [...oldArray, type]);
    }
  };

  return (
    <>
      {filterMobile ? (
        <FilterMobile
          getProjects={getProjects}
          handleProjects={handleProjects}
          handleTypes={handleTypes}
          projects={projects}
          types={types}
          setFilterMobile={setFilterMobile}
        />
      ) : (
        <div className="bg-white-50 pb-12 w-full justify-center px-5 md:px-11 lg:px-24.5 xl:px-45 2xl:px-65 3xl:px-90 flex lg:block">
          <div className=" lg:pt-15 pt-7 pb-7">
            <div className="flex flex-col md:flex-row md:justify-start space-y-2 md:space-x-8 lg:justify-between mb-7">
              <div className="text-ft7 flex flex-row xd:text-ft8 text-black-100 space-x-1 items-center">
                <p className="font-PoppinsMedium">Choose a Project to </p>
                <p className="font-PoppinsSemiBold"> Start Earning</p>
              </div>
              <div className="flex md:space-x-15px justify-end">
                {!showSearch ? (
                  <img
                    className="cursor-pointer w-8 md:w-auto"
                    src="/images/search.svg"
                    alt=""
                    onClick={() => {
                      setSearch(true);
                    }}
                  />
                ) : (
                  ""
                )}
                {showSearch ? (
                  <div class="  cursor-pointer rounded-19px px-4 bg-white-100">
                    <div className="flex">
                      <img src="/images/search.svg" alt="" />
                      <input
                        type="text"
                        className=" py-2 font-PoppinsRegular text-ft4 text-black-50  outline-none px-2 w-32 h-38px xl:w-62.5 bg-white-100"
                        placeholder="Stake"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                      <img
                        src="/images/cross.svg"
                        alt=""
                        onClick={() => {
                          setSearch(false);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <img
                  className="cursor-pointer w-8 md:w-auto"
                  onClick={() =>
                    window.innerWidth < 768
                      ? setFilterMobile(true)
                      : setShowFilter(true)
                  }
                  src="/images/filter.svg"
                  alt=""
                />
              </div>
            </div>
            {isloading ? (
              <div className="min-h-421px flex items-center justify-center">
                <CircularProgress />
              </div>
            ) : (
              <>
                {projectList &&
                projectList.filter((item) => {
                  if (searchValue.trim() === "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(searchValue.trim().toLowerCase())
                  ) {
                    return item;
                  }
                }).length === 0 ? (
                  <div className="min-h-320px flex items-center justify-center">
                    No Projects Found
                  </div>
                ) : (
                  <div className="grid  grid-cols-1 3xl:grid-cols-3  md:grid-cols-2 gap-x-4 gap-y-6 md:gap-x-7 md:gap-y-31px  lg:gap-11 min-h-320px">
                    {projectList
                      .filter((item) => {
                        if (searchValue.trim() === "") {
                          return item;
                        } else if (
                          item.name
                            .toLowerCase()
                            .includes(searchValue.trim().toLowerCase())
                        ) {
                          return item;
                        }
                      })
                      .map((items, index) => (
                        <Card
                          key={index}
                          name={items?.cryptoToBeEarned}
                          logo={items?.projectImage}
                          coin={items.totalTokensTobeEarned}
                          heading={items.name}
                          projectId={items?._id}
                        />
                      ))}
                  </div>
                )}
              </>
            )}
          </div>
          {showFilter && (
            <Filter
              onClose={() => setShowFilter(false)}
              getProjects={getProjects}
              handleProjects={handleProjects}
              handleTypes={handleTypes}
              projects={projects}
              types={types}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
