import React, { useState } from 'react';
import Layout from '../../../components/layout';
import Modal from '../../../components/UI/modal';
import startup from '../../../images/my-profile/startUp.svg';
import coding from '../../../images/my-profile/coding.svg';
import lawschool from '../../../images/my-profile/lawSchool.svg';
import airpod from '../../../images/my-profile/airpod.svg';
import ide from '../../../images/developer-profile/IDE.svg';
import moyaho from '../../../images/developer-profile/moyaho.svg';
import { createKakaoButton } from '../../../components/KakaoShareButton';


const selectedTab = {
    backgroundColor: 'black',
    color: 'white',
};
const notSelectedTab = {
    backgroundColor: 'white',
    color: "#8D8D8D"
}

const DeveloperProfile = ({ history }) => {
    const [pageNum, setPageNum] = useState(1);
    const [anyThingClicked, setAnyThingClicked] = useState(false);

    let contents = null;
    if(pageNum === 1) {
        contents = (
            <>
                {/* Profile Container */}
                <section style={{height: '100%'}} className="px-3 py-3 mx-3">
                {/* 프로필 사진 */}
                    <div className="relative">
                        <img 
                            style={{width: 198, height: 198, borderRadius: 114, backgroundColor: 'gray', margin: '0 auto', objectFit: 'cover'}}
                            src='/devProfile/developer_profile.svg'
                            alt="dev_profile"
                        />
                    </div>

                    {/* 닉네임, 개인정보 */}
                    <div className="mt-3">
                        <div className="text-center">
                            <div className="flex flex-row items-center justify-center">
                                <a href="http://pf.kakao.com/_kDxhtK" style={{color: "#8D8D8D", fontSize: 11}} className="cursor-pointer">XIRCLE에게 문의하기</a>
                                <img 
                                    src="/right_arrow.svg"
                                    alt="right_arrow"
                                    style={{width: 10, height: 10, marginLeft: 3}}
                                />
                            </div>
                            <h3 style={{fontSize: 20, fontWeight: '600', margin: '5px 0'}}>XIRCLE 개발자 <span style={{fontSize: 18, fontWeight: 'lighter'}}>@YKRING</span></h3>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div style={{height: 25, borderRadius: 3, backgroundColor: '#DAD4FF', margin: '0 2px'}}><p style={{fontSize: '8px', color: '#616060', fontWeight: 'normal', padding: '7px'}}>고려대 / 연세대 재학중</p></div>
                            <div style={{height: 25, borderRadius: 3, backgroundColor: '#F7F7FA', margin: '0 2px'}}><p style={{fontSize: '8px', color: '#616060', fontWeight: 'normal', padding: '7px'}}>20중</p></div>
                            <div style={{height: 25, borderRadius: 3, backgroundColor: '#F7F7FA', margin: '0 2px'}}><p style={{fontSize: '8px', color: '#616060', fontWeight: 'normal', padding: '7px'}}>남</p></div>
                        </div>
                    </div>

                    {/* 직장, 한줄소개 */}
                    <ul style={{marginTop: 30}}>
                        <li className="flex flex-row items-center">
                                <img 
                                    style={{width: 15, height: 15}}
                                    src="/profile/company.svg"
                                    alt="company"
                                />
                                <p style={{margin: "0px 5px 0 10px"}} className="font-extrabold my-0">Xirce</p><span>재직중</span>
                        </li>
                        <li className="flex flex-row items-center my-3">
                            <img 
                                style={{width: 15, height: 15}}
                                src="/profile/grobal.svg"
                                alt="grobal"
                            />
                            <p style={{margin: "0px 5px 0 10px"}} className="my-0">Xircle 개발 / 연고대창업학회</p>
                        </li>
                        <li className="flex flex-row items-center my-3">
                            <img 
                                style={{width: 15, height: 15}}
                                src="/profile/location.svg"
                                alt="location"
                            />
                            <p style={{margin: "0px 5px 0 10px", color: "#7C7C7C"}} className="my-0">Javascript 거주</p>
                        </li>
                        <li className="flex flex-row mb-2">
                            <p className="">취향과 성향이 잘 맞는 사람들과 대화하고 만날 수 있는 <br/> 대학기반 네트워킹 서비스 [베타테스트] 서연고서성한대상 <br/><br/></p>
                        </li>
                    </ul>
                </section>

                {/* Album Navigation */}
                <section className="flex flex-row items-center justify-start mt-1">
                    <button 
                        style={selectedTab}
                        className="px-5 py-3 mx-3 rounded-3xl focus:outline-none"
                    >
                        <p style={{margin: '0px 5px'}}>XIRCLE</p>
                    </button>
                </section>

                {/* Album Container */}
                <section style={{minHeight: '500px', height: '100%', padding: '20px 0', margin: '10px 0', backgroundColor: "#F7F7FA"}}>
                    <ul className="flex flex-row justify-evenly flex-wrap">
                        <li 
                            style={{
                                backgroundImage: `url(${ide})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
                                margin: 5, backgroundColor: "#fff", borderRadius: 15, objectFit: 'contain',
                                backgroundColor: '#000', overflow: 'hidden',
                                width: '45%', height: 281, color: '#fff'
                            }} 
                            className="cursor-pointer"
                        >
                            <div style={{zIndex: 10, padding: '0 20px'}} className="h-full flex flex-row justify-center items-center relative">
                                <p style={{color: "#fff", fontSize: 14, fontWeight: 500, fontFamily: 'sans-serif', lineHeight: '20px'}}>
                                    코로나에는 
                                    새로운 네트워킹 
                                    XIRCLE ❤️
                                </p>
                                <p style={{position: 'absolute', bottom: 10, right: 10, fontSize: 10, fontWeight: 300, color: "#8D8D8D"}}>더보기</p>
                            </div>
                        </li>
                        <li 
                            style={{
                                margin: 5, backgroundColor: "#fff", borderRadius: 15, 
                                backgroundColor: '#000', overflow: 'hidden',
                                width: '45%', height: 111, color: '#fff'
                            }} 
                            className="cursor-pointer relative"
                            onClick={() => history.push('event')}
                        >
                            <div style={{height: '80%'}} className="h-full flex flex-col justify-center items-center">
                                <p style={{margin: 0, fontSize: 12, margin: '2px 0', fontWeight: 'lighter'}}>친구도 사귀고 에어팟도 받고</p>
                                <p style={{margin: 0, fontSize: 12, margin: '2px 0', fontWeight: 'bold', textAlign: 'center'}}>에어팟 프로 0원 이벤트</p>
                                <p style={{margin: 0, fontSize: 6, margin: '2px 0', fontWeight: 'lighter', textAlign: 'center'}}>바로가기</p>
                                <div style={{ height: 40, width: 40, position: 'absolute', bottom: -5, left: '50%', transform: 'translate(-50%, 0)', backgroundSize: 'cover', backgroundImage: `url(${airpod})` }}></div>
                            </div>
                        </li>
                        <li 
                            style={{
                                backgroundImage: `url(${moyaho})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
                                margin: 5, backgroundColor: "#fff", borderRadius: 15, 
                                backgroundColor: '#000', overflow: 'hidden',
                                width: '45%', height: 111, color: '#fff'
                            }} 
                            className="cursor-pointer relative"
                        >
                        </li>
                        <li 
                            style={{
                                margin: 5, backgroundColor: "#fff", borderRadius: 15, overflow: 'hidden',
                                width: '45%', height: 160,
                                transform: 'translate(0, -170px)'
                            }} 
                            className="cursor-pointer relative flex flex-col justify-center items-center"
                            onClick={() => window.location.href = 'https://www.instagram.com/xircle_official/'}
                        >
                            <img 
                                style={{width: 70, height: 70}}
                                src="/devProfile/insta.svg"
                                alt="insta"
                            />
                            <p>XIRCLE 인스타그램</p>
                        </li>
                        <li 
                            style={{
                                margin: 10, backgroundColor: "#fff", borderRadius: 15, overflow: 'hidden',
                                width: '45%', height: 160,
                                transform: 'translate(0, -50px)'
                            }} 
                            className="cursor-pointer relative flex flex-col justify-center items-center"
                            onClick={() => window.location.href = 'http://pf.kakao.com/_kDxhtK'}
                        >
                            <img 
                                style={{width: 70, height: 70}}
                                src="/devProfile/kakaotalk.svg"
                                alt="kakao"
                            />
                            <p>XIRCLE 문의하기</p>
                        </li>
                        <li 
                            id="kakao-invite"
                            onClick={() => createKakaoButton('#kakao-invite')}
                            style={{
                                margin: 5, backgroundColor: "#fff", borderRadius: 15,
                                transform: 'translate(0, -171px)',
                                width: '45%', height: 281
                            }} 
                            className="cursor-pointer relative flex flex-col justify-center items-center"
                        >
                            <img 
                                style={{width: 70, height: 70}}
                                src="/profile/message.svg"
                                alt="message"
                            />
                            <p>XIRCLE 초대장 보내기</p>
                        </li>
                        <li 
                            style={{
                                margin: 10, backgroundColor: "#fff", borderRadius: 15, overflow: 'hidden',
                                width: '45%', height: 160,
                                transform: 'translate(0, -160px)'
                            }} 
                            className="cursor-pointer relative flex flex-col justify-center items-center"
                            onClick={() => window.location.href = 'https://www.facebook.com/xircle.org'}
                        >
                            <img 
                                style={{width: 70, height: 70}}
                                src="/devProfile/facebook.svg"
                                alt="facebook"
                            />
                            <p>XIRCLE 페이스북</p>
                        </li>
                        <li 
                            style={{
                                margin: 10, backgroundColor: "#F7F7FA", width: '43%'
                            }} 
                        >
                        </li>
                    </ul>
                </section>
            </>
        )
    }else {
        contents = (
            <div style={{padding: '0 30px'}} className="min-h-screen h-full">
                <div style={{ fontFamily: 'sans-serif'}}>
                    <img 
                        style={{width: 50, height: 50}}
                        src="/moyaho.svg"
                        alt="moyaho"
                    />
                    <p style={{marginTop: 20, lineHeight: 1.5}}>
                        안녕하세요. XIRCLE 입니다.<br/>
                        사전신청 해주신 모든 분들 진심으로 감사드립니다.<br/>
                        베타버전 정식 런칭은 4월 16일에 시작합니다.<br/>
                    </p>
                    <p style={{lineHeight: 1.5}}>
                        XIRCLE은 연고대 재학생들이 코로나때문에 <br/>
                        막혀버린 네트워킹의 기회를 해결하기 위해<br/>
                        만들어진 프로젝트 서비스로 금전적 이익을 얻지 않습니다.<br/>
                    </p>
                    <p style={{lineHeight: 1.5}}>
                        에어팟 / 올리브영 1만원권 이벤트도 <br/>
                        많이 많이 참가해주시구 주변 친구들에게 초대장도<br/>
                        보내주시면 감사하겠습니다 ㅎㅎㅎ <br/>
                    </p>
                    <p style={{lineHeight: 1.5}}>
                        일단 서연고서성한 대상으로 진행하며 <br/>
                        상황을 보고 학교를 확대할 예정입니다. <br/>
                    </p>
                    <p style={{lineHeight: 1.5}}>
                        ※ 게시글에 관한 문의가 많은데 <br/>
                        게시글은  3월 19일 정도부터 올리실 수 있으며 <br/>
                        친구에게 메시지 보내는건 3월 25일 정도부터 <br/>
                        가능할 것 같아요 :)
                    </p>
                </div>
                <a href="http://pf.kakao.com/_kDxhtK" style={{display: 'block', color: "#BFBFBF", margin: '100px 0', textAlign: 'center'}}>고객센터 바로가기</a>
            </div>
        )
    }
    return (
        <Layout footerNone invitement>
            <header style={{margin: "20px 0 35px 0"}}>
                <section className="flex flex-row items-center justify-around">
                    <div className="px-5 py-2" style={{width: 87}}>
                        <img
                            onClick={() => history.goBack()} 
                            style={{width: '20px', height: '20px', margin: '0 auto', cursor: 'pointer'}}
                            src="/arrow-back-outline.svg"
                            alt="back"
                        />
                    </div>
                    <button 
                        style={pageNum === 1 ? selectedTab : notSelectedTab}
                        className="px-5 py-3 rounded-3xl focus:outline-none"
                        onClick={() => setPageNum(1)}
                    > XIRCLE
                    </button>
                    <button 
                        style={pageNum === 2 ? selectedTab : notSelectedTab}
                        className="px-5 py-3 rounded-3xl focus:outline-none"
                        onClick={() => setPageNum(2)}
                    >
                        <div style={{position: 'relative'}} className="flex flex-row">
                            여러분..
                            <div style={{width: 8, height: 8, backgroundColor: 'red', borderRadius: 4, position: 'absolute', right: -10, top: -5}} />
                        </div>
                    </button>
                </section>
            </header>

            <Modal show={anyThingClicked} clicked={() => setAnyThingClicked(false)}>
                <div className="mb-5">
                    <h1 className="text-xl mb-5">개발중입니다.</h1>
                </div>
            </Modal>

            {contents}
        </Layout>
    )
}

export default DeveloperProfile;