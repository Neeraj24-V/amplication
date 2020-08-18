import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Snackbar } from "@rmwc/snackbar";
import { formatError } from "../util/error";
import * as models from "../models";
import { DataGrid, DataField } from "../Components/DataGrid";
import DataGridRow from "../Components/DataGridRow";
import { DataTableCell } from "@rmwc/data-table";
import { Link } from "react-router-dom";
import CircleIcon from "../Components/CircleIcon";
import NewEntityField from "./NewEntityField";

import "@rmwc/data-table/styles";

const fields: DataField[] = [
  {
    name: "displayName",
    title: "Display Name",
    sortable: true,
  },
  {
    name: "name",
    title: "Name",
    sortable: true,
  },
  {
    name: "description",
    title: "Description",
    sortable: true,
  },
  {
    name: "dataType",
    title: "Type",
    sortable: true,
  },
  {
    name: "required",
    title: "Required",
    sortable: true,
    minWidth: true,
  },
  {
    name: "searchable",
    title: "Searchable",
    sortable: true,
    minWidth: true,
  },
  {
    name: "permissions",
    title: "Permissions",
    sortable: false,
  },
];

type TData = {
  entity: models.Entity;
};

type sortData = {
  field: string | null;
  order: number | null;
};

const NAME_FIELD = "displayName";

const INITIAL_SORT_DATA = {
  field: null,
  order: null,
};

type Props = {
  entityId: string;
};

export const EntityFieldList = ({ entityId }: Props) => {
  const [sortDir, setSortDir] = useState<sortData>(INITIAL_SORT_DATA);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  const handleSortChange = (fieldName: string, order: number | null) => {
    setSortDir({ field: fieldName, order: order === null ? 1 : order });
  };

  const handleSearchChange = (value: string) => {
    setSearchPhrase(value);
  };

  const history = useHistory();

  const { data, loading, error, refetch } = useQuery<TData>(GET_FIELDS, {
    variables: {
      id: entityId,
      orderBy: {
        [sortDir.field || NAME_FIELD]:
          sortDir.order === 1 ? models.SortOrder.Desc : models.SortOrder.Asc,
      },
      whereName: searchPhrase !== "" ? { contains: searchPhrase } : undefined,
    },
  });

  const errorMessage = formatError(error);

  const handleFieldAdded = useCallback(
    (field: models.EntityField) => {
      refetch();
      const fieldUrl = `/${data?.entity.appId}/entities/${entityId}/fields/${field.id}`;
      history.push(fieldUrl);
    },
    [data, history, entityId, refetch]
  );

  return (
    <>
      <DataGrid
        fields={fields}
        title="Entity Fields"
        loading={loading}
        sortDir={sortDir}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        toolbarContentStart={<NewEntityField onFieldAdded={handleFieldAdded} />}
      >
        {data?.entity.fields?.map((field) => {
          const fieldUrl = `/${data?.entity.appId}/entities/${entityId}/fields/${field.id}`;

          return (
            <DataGridRow navigateUrl={fieldUrl}>
              <DataTableCell>
                <Link
                  className="amp-data-grid-item--navigate"
                  title={field.displayName}
                  to={fieldUrl}
                >
                  <span className="text-medium">{field.displayName}</span>
                </Link>
              </DataTableCell>
              <DataTableCell>{field.name}</DataTableCell>
              <DataTableCell>{field.description}</DataTableCell>
              <DataTableCell>{field.dataType}</DataTableCell>
              <DataTableCell alignMiddle>
                {field.required && <CircleIcon icon="check" />}
              </DataTableCell>
              <DataTableCell alignMiddle>
                {field.searchable && <CircleIcon icon="check" />}
              </DataTableCell>
              <DataTableCell>
                <span className="tag tag1">Update</span>
                <span className="tag tag2">View</span>
              </DataTableCell>
            </DataGridRow>
          );
        })}
      </DataGrid>

      <Snackbar open={Boolean(error)} message={errorMessage} />
    </>
  );
  /**@todo: move error message to hosting page  */
};

/**@todo: expand search on other field  */
/**@todo: find a solution for case insensitive search  */
export const GET_FIELDS = gql`
  query getEntityFields(
    $id: String!
    $orderBy: EntityFieldOrderByInput
    $whereName: StringFilter
  ) {
    entity(where: { id: $id }) {
      id
      appId
      fields(where: { displayName: $whereName }, orderBy: $orderBy) {
        id
        displayName
        name
        dataType
        required
        searchable
        description
      }
    }
  }
`;
