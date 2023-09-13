  import React, { useState } from 'react';
  import { Link } from 'react-router-dom'; 
  import '../../styles/SideBar.css';

  const SideBar = () => {
    const [isShrinkView, setIsShrinkView] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeChange = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark');
    };
    const handleCollapsibleToggle = () => {
      setIsShrinkView(!isShrinkView);
    };

    return (
        <div>
        <div className={`sidebar-container${isShrinkView ? ' shrink' : ''}`}>
      
          <div className={`sidebar-wrapper${isShrinkView ? ' shrink' : ''}`}>
            <div className="sidebar-themeContainer">
              <label
                htmlFor="theme-toggle"
                className={`sidebar-themeLabel${isDarkMode ? ' switched' : ''}`}
              >
                <input
                  className="sidebar-themeInput"
                  type="checkbox"
                  id="theme-toggle"
                  onChange={handleThemeChange}
                />
                {isDarkMode ? (
                  <div className="sidebar-themeType dark">
                    <svg width="27" className='icons-theme' height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="custom-path" id="Vector" d="M26 17.8664C23.6412 18.8146 21.0556 19.0489 18.5646 18.5402C16.0736 18.0315 13.7872 16.8022 11.9894 15.0052C10.1916 13.2081 8.96188 10.9225 8.45298 8.43252C7.94407 5.94252 8.17847 3.35792 9.12704 1C6.33367 2.12471 4.01869 4.18571 2.57893 6.82967C1.13917 9.47362 0.664313 12.5359 1.23576 15.4915C1.80721 18.4471 3.38937 21.1119 5.71101 23.0292C8.03266 24.9465 10.9492 25.9967 13.9606 26C16.5503 26.0001 19.0807 25.2255 21.2263 23.776C23.3718 22.3265 25.0344 20.2684 26 17.8664Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <div className="sidebar-themeType light">
                    <svg className='icons-theme' width="29" height="29" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="custom-path" id="Vector" d="M13.5555 1.72217V3.11106M13.5555 25.3333V26.7222M26.0555 14.2222H24.6667M2.44443 14.2222H1.05554M22.3944 23.0611L21.4125 22.0791M5.6986 6.36522L4.71665 5.38328M22.3944 5.38328L21.4125 6.36522M5.6986 22.0791L4.71665 23.0611M19.1111 14.2222C19.1111 15.6956 18.5258 17.1087 17.4839 18.1505C16.442 19.1924 15.029 19.7777 13.5555 19.7777C12.0821 19.7777 10.669 19.1924 9.62717 18.1505C8.5853 17.1087 7.99999 15.6956 7.99999 14.2222C7.99999 12.7487 8.5853 11.3357 9.62717 10.2938C10.669 9.25193 12.0821 8.66661 13.5555 8.66661C15.029 8.66661 16.442 9.25193 17.4839 10.2938C18.5258 11.3357 19.1111 12.7487 19.1111 14.2222Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </label>
            </div>

            <ul className={`sidebar-list${isDarkMode ? ' dark' : ''}`}>
              <li className="sidebar-listItem">
                <Link to="/" className="app-sidebar-link active">
                  <svg width="47" className='icons' height="38" viewBox="0 0 47 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" className='icons' fill='none' d="M1.59723 19.2778L6.5139 15.3612M6.5139 15.3612L23.7222 1.65283L40.9306 15.3612M6.5139 15.3612V34.9445C6.5139 35.4639 6.7729 35.962 7.23393 36.3293C7.69495 36.6965 8.32024 36.9028 8.97223 36.9028H16.3472M40.9306 15.3612L45.8472 19.2778M40.9306 15.3612V34.9445C40.9306 35.4639 40.6716 35.962 40.2105 36.3293C39.7495 36.6965 39.1242 36.9028 38.4722 36.9028H31.0972M16.3472 36.9028C16.9992 36.9028 17.6245 36.6965 18.0855 36.3293C18.5466 35.962 18.8056 35.4639 18.8056 34.9445V27.1112C18.8056 26.5918 19.0646 26.0937 19.5256 25.7264C19.9866 25.3592 20.6119 25.1528 21.2639 25.1528H26.1806C26.8326 25.1528 27.4578 25.3592 27.9189 25.7264C28.3799 26.0937 28.6389 26.5918 28.6389 27.1112V34.9445C28.6389 35.4639 28.8979 35.962 29.3589 36.3293C29.82 36.6965 30.4452 36.9028 31.0972 36.9028M16.3472 36.9028H31.0972" stroke="#755EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <span className="sidebar-listItemText">Home</span>
              </li>
              <li className="sidebar-listItem">
                <Link to="/core" className="app-sidebar-link">
                  <svg width="46" className='icons' height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="&#240;&#159;&#166;&#134; icon &#34;Skill level basic&#34;">
                      <path className="custom-path" id="Vector" d="M42.243 42.7429H30.993V6.18042H42.243V42.7429ZM33.8055 39.9304H39.4305V8.99292H33.8055V39.9304Z" fill="#757575" />
                      <path className="custom-path" id="Vector_2" d="M28.1805 42.7429H16.9305V17.4304H28.1805V42.7429ZM19.743 39.9304H25.368V20.2429H19.743V39.9304Z" fill="#757575" />
                      <path className="custom-path" id="Vector_3" d="M14.118 42.7429H2.86804V25.8679H14.118V42.7429Z" fill="#757575" />
                    </g>
                  </svg>
                </Link>
                <span className="sidebar-listItemText">Core</span>
              </li>
              <li className="sidebar-listItem">
                <Link to="/mid" className="app-sidebar-link">
                  <svg width="46" className='icons' height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="&#240;&#159;&#166;&#134; icon &#34;Skill level intermediate&#34;">
                      <path className="custom-path" id="Vector" d="M42.243 42.7432H30.993V6.18066H42.243V42.7432ZM33.8055 39.9307H39.4305V8.99316H33.8055V39.9307Z" fill="#757575" />
                      <path className="custom-path" id="Vector_2" d="M28.1805 42.7432H16.9305V17.4307H28.1805V42.7432Z" fill="#757575" />
                      <path className="custom-path" id="Vector_3" d="M14.118 42.7432H2.86804V25.8682H14.118V42.7432Z" fill="#757575" />
                    </g>
                  </svg>
                </Link>
                <span className="sidebar-listItemText">Mid</span>
              </li>
              <li className="sidebar-listItem">
                <Link to="/pro" className="app-sidebar-link">
                  <svg width="46" className='icons' height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="&#240;&#159;&#166;&#134; icon &#34;Skill level advanced&#34;">
                      <path className="custom-path" id="Vector" d="M42.243 42.7432H30.993V6.18066H42.243V42.7432Z" fill="#757575" />
                      <path className="custom-path" id="Vector_2" d="M28.1805 42.7432H16.9305V17.4307H28.1805V42.7432Z" fill="#757575" />
                      <path className="custom-path" id="Vector_3" d="M14.118 42.7432H2.86804V25.8682H14.118V42.7432Z" fill="#757575" />
                    </g>
                  </svg>
                </Link>
                <span className="sidebar-listItemText">Pro</span>
              </li>
              <li className="sidebar-listItem">
                <Link to="/deploy" className="app-sidebar-link">
                  <svg className='icons' width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className='icons' id="Rocket Icon Outline">
                      <path className="custom-path" id="Vector" d="M18.9624 36.1648L8.10645 24.1893C12.1374 10.7272 23.6479 1 37.2144 1C38.1142 1 39.0056 1.043 39.8859 1.12593C39.9611 2.0965 40.0001 3.07936 40.0001 4.0745C40.0001 19.0324 31.1833 31.7174 18.9624 36.1648Z" fill="#757575" stroke="#757575" strokeOpacity="0.75" strokeWidth="2" />
                      <path className="custom-path" id="Vector_2" d="M9.35717 34.7856L6.57145 37.857M13.5357 39.3928L10.75 42.4642M5.1786 30.1785L2.39288 33.2499" stroke="#757575" strokeOpacity="0.75" strokeWidth="2" fill="#757575" strokeLinecap="round" />
                      <path className="custom-path" id="Vector_3" d="M23.2857 22.5C24.8242 22.5 26.0714 21.1249 26.0714 19.4286C26.0714 17.7323 24.8242 16.3572 23.2857 16.3572C21.7472 16.3572 20.5 17.7323 20.5 19.4286C20.5 21.1249 21.7472 22.5 23.2857 22.5Z" fill="#757575" stroke="#757575" strokeOpacity="0.75" strokeWidth="2" />
                      <path className="custom-path" id="Vector_4" d="M26.0714 4.07153L37.2143 16.3572" stroke="#757575" fill="#757575" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" />
                      <path className="custom-path" id="Vector_5" d="M26.0714 33.25V44L1 16.3572H10.75" stroke="#757575" fill="#757575" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </Link>
                <span className="sidebar-listItemText">Deploy</span>
              </li>
            </ul>
          </div>
        </div>
        <button
          className={`button-outside-sidebar${isShrinkView ? ' collapsed' : ''}`}
          onClick={handleCollapsibleToggle}
        >
          {isShrinkView ? (
            <svg className="icon-v" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
              <path d="M0.861828 8.06206L7.22583 1.69806C7.41336 1.51059 7.66766 1.40527 7.93283 1.40527C8.19799 1.40527 8.4523 1.51059 8.63983 1.69806L15.0038 8.06206" stroke="black" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="icon-v" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
              <path d="M15.0038 1.40527L8.63983 7.76927C8.54695 7.86225 8.43667 7.93601 8.31527 7.98633C8.19387 8.03666 8.06374 8.06256 7.93233 8.06256C7.80091 8.06256 7.67079 8.03666 7.54939 7.98633C7.42799 7.93601 7.3177 7.86225 7.22483 7.76927L0.861828 1.40527" stroke="black" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

   );
 };

  export default SideBar;
