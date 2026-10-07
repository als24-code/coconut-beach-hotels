"use client";

import { useState, useRef, useEffect } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDay = (year, month) => new Date(year, month, 1).getDay();

const formatDate = (date) => {
  if (!date) return null;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};

const CalendarDropdown = ({ placeholder = "Select dates" }) => {
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hovered, setHovered] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const rightMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const rightYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  const handleDayClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setStartDate(date);
        setEndDate(null);
      } else {
        setEndDate(date);
        setOpen(false);
      }
    }
  };

  const isInRange = (date) => {
    if (!startDate) return false;
    const end = endDate || hovered;
    if (!end) return false;
    const [a, b] = startDate < end ? [startDate, end] : [end, startDate];
    return date > a && date < b;
  };

  const displayValue = startDate
    ? endDate
      ? `${formatDate(startDate)} → ${formatDate(endDate)}`
      : formatDate(startDate)
    : null;

  const renderMonth = (year, month) => {
    const days = getDaysInMonth(year, month);
    const firstDay = getFirstDay(year, month);
    const cells = [];

    for (let i = 0; i < firstDay; i++) cells.push(<div key={`e-${i}`} />);

    for (let d = 1; d <= days; d++) {
      const date = new Date(year, month, d);
      const isStart = startDate && formatDate(date) === formatDate(startDate);
      const isEnd = endDate && formatDate(date) === formatDate(endDate);
      const inRange = isInRange(date);
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

      cells.push(
        <div
          key={d}
          onMouseEnter={() => startDate && !endDate && setHovered(date)}
          onClick={() => !isPast && handleDayClick(date)}
          className={[
            "h-8 flex items-center justify-center text-sm rounded-full cursor-pointer select-none transition-colors",
            isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100",
            isStart || isEnd ? "bg-gray-900 text-white hover:bg-gray-900" : "",
            inRange ? "bg-gray-200 rounded-none" : "",
          ].join(" ")}
        >
          {d}
        </div>,
      );
    }
    return cells;
  };

  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full h-[72px] px-6 bg-[var(--gray-100)] rounded-[var(--radius-md)] flex items-center justify-between text-left"
      >
        <span
          className={
            displayValue
              ? "text-gray-900 text-[0.9rem]"
              : "text-[var(--gray-600)] text-[0.95rem]"
          }
        >
          {displayValue || placeholder}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 bottom-[105%] bg-white border border-gray-200 shadow-xl rounded-lg p-5 z-50 w-full sm:w-[580px]">
          {" "}
          {/* Nav */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevMonth}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              ‹
            </button>
            <span className="text-sm font-semibold text-gray-700">
              {MONTHS[viewMonth]} {viewYear} — {MONTHS[rightMonth]} {rightYear}
            </span>
            <button
              onClick={nextMonth}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              ›
            </button>
          </div>
          {/* Two months */}
          <div className="flex gap-6">
            {[
              [viewYear, viewMonth],
              [rightYear, rightMonth],
            ].map(([y, m], idx) => (
              <div key={idx} className="flex-1">
                <p className="text-center text-xs font-semibold text-gray-500 mb-2">
                  {MONTHS[m]}
                </p>
                <div className="grid grid-cols-7 text-center text-xs font-bold text-gray-400 mb-1">
                  {DAYS.map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 text-center gap-y-1">
                  {renderMonth(y, m)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDropdown;
