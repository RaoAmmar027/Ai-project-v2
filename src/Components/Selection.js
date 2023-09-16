import React, { useState } from 'react'
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
const Selection = () => {
    const Languages = [
        "english",
        "french",
        "german",
        "hindi",
        "chinese",
        "italian",
        "japanese",
      ];
    
      const speaker_options = [
        "speaker 1",
        "speaker 2",
        "speaker 3",
        "speaker 4",
        "speaker 5",
        "speaker 6",
        "speaker 7",
        "speaker 8",
        "speaker 9",
        "speaker 10",
      ];
    
      const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
      const [selectedLanguage, setSelectedLanguage] = useState("");
      const [isVoiceDropdownOpen, setIsVoiceDropdownOpen] = useState(false);
      const [selectedVoice, setSelectedVoice] = useState("");
    
      const handleLanguageDropdownClick = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
        setIsVoiceDropdownOpen(false); // Close voice dropdown if open
      };
    
      const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsLanguageDropdownOpen(false);
      };
    
      const handleVoiceDropdownClick = () => {
        setIsVoiceDropdownOpen(!isVoiceDropdownOpen);
        setIsLanguageDropdownOpen(false); // Close language dropdown if open
      };
    
      const handleVoiceSelect = (voice) => {
        setSelectedVoice(voice);
        setIsVoiceDropdownOpen(false);
      };
  return (
    <>
           <Container>
        <Row justifyContent='center'>
          <Col lg={3} md={6} sm={4} xs={6}>
            <SelectDropdown
              onClick={handleLanguageDropdownClick}
              isOpen={isLanguageDropdownOpen}
            >
              <span>{selectedLanguage || "Select Language"}</span>
              <DropdownIcon src="images/dropdown.png" alt="Dropdown" />
              {isLanguageDropdownOpen && (
                <DropdownList>
                  {Languages.map((language, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      {language}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </SelectDropdown>
          </Col>
          <Col lg={3} md={6} sm={4} xs={6}>
            <SelectDropdown
              onClick={handleVoiceDropdownClick}
              isOpen={isVoiceDropdownOpen}
            >
              <span>{selectedVoice || "Select Voice"}</span>
              <DropdownIcon src="images/dropdown.png" alt="Dropdown" />
              {isVoiceDropdownOpen && (
                <DropdownList>
                  {speaker_options.map((voice, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleVoiceSelect(voice)}
                    >
                      {voice}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </SelectDropdown>
          </Col>
        </Row>
      </Container>

    </>
  )
}
const DropdownIcon = styled.img`
  width: 15px;
  margin-left: 10px;
`;

const SelectDropdown = styled.div`
  width: 100%;
  flex: 1;
  color: #fff;
  background: #403d84;
  padding: 0 20px;
  height: 50px;
  outline: 0;
  border: 0;
  border-radius: 35px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #403d84;
  max-height: 200px; /* Set the maximum height */
  overflow-y: auto; /* Add scrollbar when content overflows */
  margin-top:0.7rem;
  z-index:2;
  scrollbar-width: thin; /* Custom scrollbar for Firefox */
  scrollbar-color: #003366 #003366; /* Custom scrollbar for Firefox */
  /* Custom scrollbar for WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px; /* Set the width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #003366; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Radius of the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #001f4d; /* Color of the scrollbar thumb on hover */
  }
`;


const DropdownItem = styled.div`
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export default Selection