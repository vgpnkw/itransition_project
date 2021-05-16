/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';

const DragNdrop = ({
  drag, dragStartHandler, dragLeaveHandler, onDropHandler,
}) => {
  const { t } = useTranslation();

  return (
    <div className="h-50">
      {drag
        ? (
          <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
            className="drop-area"
          >
            {t('Drop files')}
          </div>
        )
        : (
          <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            className="drag-area"
          >
            {t('Drag files')}
          </div>
        )}
    </div>
  );
};

export default DragNdrop;
