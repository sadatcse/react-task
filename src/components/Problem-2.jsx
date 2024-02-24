import React, { useState } from 'react';

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);

    const handleContactsClick = (modal) => {
        if (modal === 'A') {
            setShowModalA(true);
        } else {
            setShowModalB(true);
        }
    };

    const handleButtonClick = (button) => {
        if (button === 'A') {
            setShowModalA(true);
            setShowModalB(false);
        } else {
            setShowModalB(true);
            setShowModalA(false);
        }
    };

    const closeModal = (modal) => {
        if (modal === 'A') {
            setShowModalA(false);
        } else {
            setShowModalB(false);
        }
    };

    return (
        <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="row justify-content-center">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => handleContactsClick('A')}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => handleContactsClick('B')}>US Contacts</button>
                </div>
            </div>
            {showModalA && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">All Contacts</h5>
                                <button type="button" className="close" onClick={() => closeModal('A')} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                    
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-lg" style={{ backgroundColor: '#46139f' }} onClick={() => handleButtonClick('A')}>All Contacts</button>
                                <button type="button" className="btn btn-lg" style={{ backgroundColor: '#ff7f50' }} onClick={() => handleButtonClick('B')}>US Contacts</button>
                                <button type="button" className="btn btn-lg btn-danger" style={{ backgroundColor: 'white', borderColor: '#46139f', color: '#46139f' }} onClick={() => closeModal('A')}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModalB && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">US Contacts</h5>
                                <button type="button" className="close" onClick={() => closeModal('B')} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                          
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-lg" style={{ backgroundColor: '#46139f' }} onClick={() => handleButtonClick('A')}>All Contacts</button>
                                <button type="button" className="btn btn-lg" style={{ backgroundColor: '#ff7f50' }} onClick={() => handleButtonClick('B')}>US Contacts</button>
                                <button type="button" className="btn btn-lg btn-danger" style={{ backgroundColor: 'white', borderColor: '#46139f', color: '#46139f' }} onClick={() => closeModal('B')}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Problem2;