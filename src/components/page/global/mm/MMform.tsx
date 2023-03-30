import {
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import axios from "axios";
import React, { useState } from "react";
import domain from "../../../../util/domain";

interface MMformProps {
  closeForm: () => void;
}

export default function MMform({ closeForm }: MMformProps) {
  const [type, settype] = useState<boolean>(false);
  const [itemState, setItemState] = useState<any>({});

  const [save, ssave] = useState<string>("שמור");

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"
      spacing={6}
    >
      <Grid item container direction="row" justifyContent="center" spacing={4}>
        <Grid item>
          <Button
            sx={{
              "&:hover": { backgroundColor: "blue" },
              border: "unset",
              font: "unset",
              color: "unset",
              cursor: "pointer",
              backgroundColor: "rgba(23, 1, 148, 0.692)",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => settype(false)}
            style={{ fontSize: "2rem", backgroundColor: type ? "" : "blue" }}
          >
            הזן חוו״ד מראה מקום חדש
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{
              "&:hover": { backgroundColor: "blue" },
              border: "unset",
              font: "unset",
              color: "unset",
              cursor: "pointer",
              backgroundColor: "rgba(23, 1, 148, 0.692)",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => settype(true)}
            style={{ fontSize: "2rem", backgroundColor: !type ? "" : "blue" }}
          >
            הזן אירוע מראה מקום חדש
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={5}
      >
        <Grid item>זמן:</Grid>
        <Grid item>
          <TextField
            multiline
            value={itemState.when}
            onChange={(e) => {
              const tempItem = itemState;
              tempItem.when = e.target.value;
              setItemState(Object.assign({}, tempItem));
            }}
          />
        </Grid>
      </Grid>
      {type ? (
        <Grid item>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>תיאור האירוע</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  תיאור הטיפול באירוע
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>
                  <TextField
                    multiline
                    value={itemState.what}
                    onChange={(e) => {
                      const tempItem = itemState;
                      tempItem.what = e.target.value;
                      setItemState(Object.assign({}, tempItem));
                    }}
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <TextField
                    multiline
                    value={itemState.how}
                    onChange={(e) => {
                      const tempItem = itemState;
                      tempItem.how = e.target.value;
                      setItemState(Object.assign({}, tempItem));
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      ) : (
        <Grid item>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>המקצוע</TableCell>
                <TableCell sx={{ textAlign: "center" }}>הקצונה</TableCell>
                <TableCell sx={{ textAlign: "center" }}>הדמות</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>
                  <TextField
                    multiline
                    value={itemState.prof}
                    onChange={(e) => {
                      const tempItem = itemState;
                      tempItem.prof = e.target.value;
                      setItemState(Object.assign({}, tempItem));
                    }}
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <TextField
                    multiline
                    value={itemState.of}
                    onChange={(e) => {
                      const tempItem = itemState;
                      tempItem.of = e.target.value;
                      setItemState(Object.assign({}, tempItem));
                    }}
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <TextField
                    multiline
                    value={itemState.image}
                    onChange={(e) => {
                      const tempItem = itemState;
                      tempItem.image = e.target.value;
                      setItemState(Object.assign({}, tempItem));
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      )}
      <Grid item>
        <button
          onClick={async () => {
            ssave("שומר...");
            let res = { data: { _id: 123 } };
            try {
              res = await axios.post(
                domain + "/mm/" + type,
                type
                  ? {
                      what: itemState.what,
                      how: itemState.how,
                    }
                  : {
                      prof: itemState.prof,
                      of: itemState.of,
                      image: itemState.image,
                    }
              );
            } catch (err) {}
            if (res.data._id !== 123) ssave("נשמר!");
            setTimeout(() => closeForm(), 500);
          }}
          style={{ fontSize: "1.7rem" }}
        >
          {save}
        </button>
      </Grid>
    </Grid>
  );
}
