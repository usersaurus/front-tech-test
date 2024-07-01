import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { IconButton, Flex } from "@radix-ui/themes";
import { useState } from "react";

type PaginationProps = {
  current: number;
  total: number;
  onChange: (page: number) => void;
};

const Pagination = ({ current, total, onChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(current);
  const buttonStatus = {
    prev: currentPage <= 1,
    next: currentPage >= total
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < total) {
      setCurrentPage(currentPage + 1);
      onChange(currentPage + 1);
    }
  };

  return (
    <Flex align="center" gap="4">
      <IconButton onClick={handlePrev}
        disabled={buttonStatus.prev}
        aria-label="previous button"
      >
        <CaretLeftIcon />
      </IconButton>
      <span>{currentPage}</span>
      <IconButton onClick={handleNext}
        disabled={buttonStatus.next}
        aria-label="next button"
      >
        <CaretRightIcon />
      </IconButton>
    </Flex>
  );
};

export default Pagination;