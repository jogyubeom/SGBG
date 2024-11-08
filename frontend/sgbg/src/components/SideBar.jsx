import React, { useEffect, useState } from "react"
import styled from "styled-components"
import HomeIcon from "../asset/images/SideBar/HomeIcon.svg?react"
import SideBarToggleIcon from "../asset/images/SideBar/SideBarToggleIcon.svg?react"

import AllImagesIcon from "../asset/images/SideBar/AllImagesIcon.svg?react"
import CommonFolderIcon from "../asset/images/SideBar/CommonFolderIcon.svg?react"
import CreateFolderIcon from "../asset/images/SideBar/CreateFolderIcon.svg?react"
import DefaultFolderIcon from "../asset/images/SideBar/DefaultFolderIcon.svg?react"
import SettingsIcon from "../asset/images/SideBar/SettingsIcon.svg?react"
import TrashBinIcon from "../asset/images/SideBar/TrashBinIcon.svg?react"

import TestImage from "../asset/images/TestImage.png"
import { useNavigate } from "react-router-dom"
import { getDirectoryList, postCreateDirectory } from "../lib/api/directory-api"
import CreateFolderModal from "./CreateFolderModal"
import { getUserInfo } from "../lib/api/user-api"

const s = {
  Test: styled.div`
    width: 356px;
    min-width: 356px;
    display: ${(props) => (props.$isopen === true ? "flex" : "none")};
  `,
  Testt: styled.div`
    width: 76px;
    min-width: 76px;
    display: ${(props) => (props.$isopen === true ? "none" : "flex")};
  `,
  Container: styled.div`
    z-index: 10;
    position: fixed;
    background-color: #ffffff;
    border-right: solid 1px #e1e3e1;
    min-width: 300px;
    width: 300px;
    padding: 28px;
    height: 100%;
    flex-direction: column;
    display: ${(props) => (props.$isopen === true ? "flex" : "none")};
    overflow-y: scroll;
  `,
  HomeIconArea: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Email: styled.span`
    font-size: 14px;
    margin-left: 8px;
  `,
  UserInfoArea: styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
  `,
  FolderCaption: styled.div`
    font-size: 14px;
    color: #838383;
    margin-top: 32px;
  `,
  FolderTitle: styled.span`
    font-size: 16px;
    color: #000000;
    margin-left: 8px;
  `,
  FolderArea: styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    cursor: pointer;
  `,
  ClosedSidebar: styled.div`
    z-index: 10;
    background-color: #ffffff;
    border-right: solid 1px #e1e3e1;
    position: fixed;
    height: 100%;
    padding: 35px 28px 0 28px;
    display: ${(props) => (props.$isopen === true ? "none" : "inline")};
  `,
}

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  // 디렉토리 리스트 정보
  const [directoryInfos, setDirectoryInfos] = useState([])
  // 새폴더 모달 열림 여부
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  // 유저 정보
  const [userInfo, setUserInfo] = useState({})

  // 컴포넌트가 로드될 때 요청
  useEffect(() => {
    fetchDirectoryInfos()
    fetchUserInfo()
  }, [])

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  const toggleCreateModal = () => {
    setIsCreateModalOpen((prev) => !prev)
  }

  const navigate = useNavigate()

  const handleHomeButtonClick = () => {
    navigate(`/`)
  }

  const handleImageButtonClick = () => {
    navigate(`/image`)
  }
  const handleEmailClick = () => {
    navigate(`/login`)
  }

  const handleFolderClick = (id) => {
    navigate(`/image/${id}`)
  }

  const createNewFolder = async (directoryName) => {
    toggleCreateModal()

    let fetchedData = await postCreateDirectory(
      { directoryName },
      (resp) => {
        return resp.data
      },
      (error) => {
        console.log("error", error)
      }
    )

    if (!fetchedData) {
      return
    }

    const fetchedDirectoryInfos = fetchedData.directories

    setDirectoryInfos(fetchedDirectoryInfos)
  }

  // 디렉토리 목록 조회 함수
  const fetchDirectoryInfos = async () => {
    let fetchedData = await getDirectoryList(
      (resp) => {
        return resp.data
      },
      (error) => {
        console.log("error", error)
      }
    )

    if (!fetchedData) {
      return
    }

    const fetchedDirectoryInfos = fetchedData.directories

    setDirectoryInfos(fetchedDirectoryInfos)
  }

  // 유저 정보 조회 함수
  const fetchUserInfo = async () => {
    getUserInfo(
      (resp) => {
        setUserInfo(resp.data)
      },
      (error) => {
        console.log("error", error)
      }
    )
  }

  return (
    <>
      <s.Test $isopen={isSideBarOpen}>
        <s.Container $isopen={isSideBarOpen}>
          <s.HomeIconArea>
            <HomeIcon
              onClick={handleHomeButtonClick}
              style={{ cursor: "pointer" }}
            />
            <SideBarToggleIcon
              onClick={toggleSideBar}
              style={{ cursor: "pointer" }}
            />
          </s.HomeIconArea>
          <s.UserInfoArea>
            <img
              onClick={handleImageButtonClick}
              src={userInfo.profileImagePath}
              alt="borami"
              width="36px"
              style={{ borderRadius: "50%" }}
            />
            <s.Email onClick={handleEmailClick}>{userInfo.email}</s.Email>
          </s.UserInfoArea>
          <s.FolderCaption>기본</s.FolderCaption>
          <s.FolderArea>
            <AllImagesIcon />
            <s.FolderTitle>전체 이미지</s.FolderTitle>
          </s.FolderArea>
          <s.FolderArea>
            <DefaultFolderIcon />
            <s.FolderTitle>기본폴더</s.FolderTitle>
          </s.FolderArea>
          <s.FolderCaption>내 폴더</s.FolderCaption>
          {directoryInfos ? (
            directoryInfos.map((directoryInfo) => (
              <s.FolderArea
                key={directoryInfo.directoryId}
                onClick={() => handleFolderClick(directoryInfo.directoryId)}
              >
                <CommonFolderIcon />
                <s.FolderTitle>{directoryInfo.directoryName}</s.FolderTitle>
              </s.FolderArea>
            ))
          ) : (
            <></>
          )}
          <s.FolderArea>
            <CommonFolderIcon />
            <s.FolderTitle>싱글벙글한 이미지</s.FolderTitle>
          </s.FolderArea>
          <s.FolderCaption>관리</s.FolderCaption>
          <s.FolderArea onClick={toggleCreateModal}>
            <CreateFolderIcon />
            <s.FolderTitle>폴더 만들기</s.FolderTitle>
          </s.FolderArea>
          {isCreateModalOpen && (
            <CreateFolderModal
              toggleFunction={toggleCreateModal}
              createFunction={createNewFolder}
            />
          )}
          <s.FolderArea>
            <TrashBinIcon />
            <s.FolderTitle>휴지통</s.FolderTitle>
          </s.FolderArea>
          <s.FolderArea>
            <SettingsIcon />
            <s.FolderTitle>설정</s.FolderTitle>
          </s.FolderArea>
        </s.Container>
      </s.Test>

      <s.Testt $isopen={isSideBarOpen}>
        <s.ClosedSidebar $isopen={isSideBarOpen}>
          <SideBarToggleIcon
            onClick={toggleSideBar}
            style={{ cursor: "pointer" }}
          />
        </s.ClosedSidebar>
      </s.Testt>
    </>
  )
}

export default SideBar
