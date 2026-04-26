"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchRatio = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StyledWrapper>
      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>
        <input
          id="query"
          className="input"
          type="search"
          placeholder="Search"
          name="searchbar"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    position: relative;
    display: flex;
    align-items: center;
    width: 270px;
    min-width: 270px;
    flex-shrink: 0;
  }

  .input {
    width: 100%;
    height: 42px;
    padding-left: 2.5rem;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    color: #38bdf8;
    font-size: 0.95rem;
    font-weight: 500;
    outline: none;
    font-family: "Inter", sans-serif;
    transition: all 0.25s ease-in-out;
    backdrop-filter: blur(8px);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .input::placeholder {
    color: #9ca3af;
  }

  .input:hover {
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.25);
  }

  .input:focus {
    background: rgba(255, 255, 255, 0.12);
    transform: scale(1.02);
    box-shadow:
      0 0 12px rgba(139, 92, 246, 0.5),
      inset 0 0 0 1.5px rgba(139, 92, 246, 0.5);
  }

  .input:focus-visible {
    outline: none;
  }

  .search-icon {
    position: absolute;
    left: 0.8rem;
    width: 1.1rem;
    height: 1.1rem;
    fill: #a5b4fc;
    opacity: 0.9;
    pointer-events: none;
    transition: fill 0.2s ease-in-out;
  }

  .group:focus-within .search-icon {
    fill: #c4b5fd;
  }
`;

export default SearchRatio;
