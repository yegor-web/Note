import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const Delete: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Delete
      </Button>
      <Modal title="Delete" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>Do you really want to delete?
      </Modal>
    </>
  );
};

export default Delete;