import React from "react";
import BodyText from "./BodyText";
import PropTypes from "prop-types";
function PaginationMeta({ meta }) {
  const limit = meta.page === meta.totalPages ? meta.totalResults : meta.limit;

  return (
    <BodyText variant="body2" type="inherit">
      Mostrando {meta.offset === 0 ? 1 : meta.offset + 1}-{limit} de{" "}
      {meta.totalResults} registros
    </BodyText>
  );
}

PaginationMeta.propTypes = {
  meta: PropTypes.shape({
    limit: PropTypes.any,
    offset: PropTypes.number,
    page: PropTypes.any,
    totalPages: PropTypes.any,
    totalResults: PropTypes.any,
  }),
};

export default PaginationMeta;
