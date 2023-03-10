import React, { useCallback, useContext } from "react";
import { AppContext } from "../../../context/appContext";
import AuthWithGit from "../../git/AuthWithGit";
import { FormikProps } from "formik";

import "./CreateGithubSync.scss";

import { CreateServiceWizardLayout as Layout } from "../CreateServiceWizardLayout";

const className = "create-github-sync";

const CreateGithubSync: React.FC<{
  moduleClass: string;
  formik?: FormikProps<{ [key: string]: any }>;
}> = ({ moduleClass }) => {
  const { refreshCurrentWorkspace } = useContext(AppContext);

  const handleOnDone = useCallback(
    (data: any) => {
      // formik.setFieldValue()
      console.log(data);
      refreshCurrentWorkspace();
    },
    [refreshCurrentWorkspace]
  );

  return (
    <Layout.Split>
      <Layout.LeftSide>
        <Layout.Description
          header="Now, let`s connect to a Git repository"
          text="Amplication automatically pushes the generated code of your services to a git repository. You are the owner of the code and can freely customize it."
        />
      </Layout.LeftSide>
      <Layout.RightSide>
        <div className={`${className}__github_box`}>
          {/* <AuthWithGit onDone={handleOnDone}></AuthWithGit> */}
        </div>
      </Layout.RightSide>
    </Layout.Split>
  );
};

export default CreateGithubSync;
