import { useEffect, useRef, useState } from 'react';
import './App.css';
let myModal = null;
function App() {
  const [inpuText, setinpuText] = useState('animal');
  const [jsonData, setJsonData] = useState([]);

  const [arr, setarr] = useState([]);
  const btnRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    console.log(btnRef);
    myModal = new bootstrap.Modal(modalRef.current);
  }, []);

  const openModal = () => {
    myModal.show();
  };
  // const getApi = async () => {
  //   let res = '';
  //   try {
  //     return res;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let res = await axios.get(
  //         `${api}?client_id=${accessKey}&query=${inpuText}`
  //       );
  //       // setJsonData(res.data.results);
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);
  // const [filterString, setFilterString] = useState('animal');
  // const onSearchHandler = (e) => {
  //   setFilterString(e.target.value);
  // };
  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className="btn btn-primary"
        onClick={openModal}
      >
        打開 Modal
      </button>
      <div className="modal fade" tabIndex="-1" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
