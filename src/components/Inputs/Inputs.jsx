import styles from "./Inputs.module.css";
import SearchSharpIcon from "@mui/icons-material/Search";

export default function Inputs({
  searchName,
  handleSearch,
  regions,
  handleRegion,
}) {
  return (
    <div className={styles.Inputs}>
      <div className={styles.SearchInput}>
        <SearchSharpIcon />
        <input
          type="text"
          value={searchName}
          onChange={handleSearch}
          placeholder="Enter Country Name"
        />
      </div>
      <select
        className={styles.SelectRegions}
        name="Regions"
        onChange={handleRegion}
      >
        <option value="">--Choose a Region--</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
