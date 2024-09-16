// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Type declaration for insertRow function
export function insertRow(row: RowElement): RowID;

// Type declaration for deleteRow function
export function deleteRow(rowId: RowID): void;

// Type declaration for updateRow function
export function updateRow(rowId: RowID, row: RowElement): RowID;

