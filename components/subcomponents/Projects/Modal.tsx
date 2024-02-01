import { MobileStatusContext } from "@/utils/context";
import { useTranslation } from "next-i18next";
import { useContext } from "react";

interface ModalProps {
  show: boolean;
  handleClick: () => void;
  descriptionKey: string;
}

export const Modal = ({ show, handleClick, descriptionKey }: ModalProps) => {
  const { t } = useTranslation("index");
  const mobileStatus = useContext(MobileStatusContext);

  return (
    <div
      className="modal "
      style={{ display: show && mobileStatus ? "flex" : "none" }}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="d-flex w-100 justify-content-center modal-dialog-centered m-0"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={() => handleClick()}
              aria-label={t("Close")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body customScroll">
            <div className="projectModal  h-100">
              <div className=" projectMain overflow-auto customScroll d-flex h-100">
                <p className="p-3 paragraph2">{t(`${descriptionKey}`)}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleClick()}
            >
              {t("Close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
