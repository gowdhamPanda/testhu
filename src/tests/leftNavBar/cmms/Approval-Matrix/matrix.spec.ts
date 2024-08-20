import { test, expect } from '@playwright/test';
import { delay, doLogin, generateRandomString } from "../../../../utils/utils";
import { routeslist } from '../../../router.const'
import { getBaseUrl } from '../../../../../config';
import { approval_matrix_Variables } from '../../../../utils/constant';
const approval_matrix_name = `approval-matrix-name-${new Date().getTime()}`;
const approval_label_one = `approval-label-one-${new Date().getTime()}`;
const approval_label_two = `approval-label-two-${new Date().getTime()}`;
const approval_label_three = `approval-label-three-${new Date().getTime()}`;
const approval_label_four = `approval-label-four-${new Date().getTime()}`;
const approval_label_five = `approval-label-five-${new Date().getTime()}`;
const new_approval_matrix_name = `new-approval-matrix-name-${new Date().getTime()}`;
const new_approval_label_one = `new-approval-label-one-${new Date().getTime()}`;
const new_approval_label_two = `new-approval-label-two-${new Date().getTime()}`;
const new_approval_label_three = `new-approval-label-three-${new Date().getTime()}`;
const new_approval_label_four = `new-approval-label-four-${new Date().getTime()}`;
const new_approval_label_five = `new-approval-label-five-${new Date().getTime()}`;
test.describe("Verify the functionalities of Approval Matrix Dashboard Page for CMMS", async () => {
  test("Create Approval Matrix", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX}`);

    await page.getByRole("button", { name: approval_matrix_Variables.operation.create }).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).fill(approval_matrix_name);
    await page.locator(approval_matrix_Variables.NextButtonLocator).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).fill(approval_label_one);
    await page.locator(approval_matrix_Variables.FormOneRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormOneDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusOneLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).fill(approval_label_two);
    await page.locator(approval_matrix_Variables.FormTwoRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormTwoDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelThreeLocator).click();
    await page.locator(approval_matrix_Variables.LabelThreeLocator).fill(approval_label_three);
    await page.locator(approval_matrix_Variables.FormThreeRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormThreeDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusThreeLocator).click();
    await page.locator(approval_matrix_Variables.LabelFourLocator).click();
    await page.locator(approval_matrix_Variables.LabelFourLocator).fill(approval_label_four);
    await page.locator(approval_matrix_Variables.FormFourRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormFourDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusFourLocator).click();
    await page.locator(approval_matrix_Variables.LabelFiveLocator).click();
    await page.locator(approval_matrix_Variables.LabelFiveLocator).fill(approval_label_five);
    await page.locator(approval_matrix_Variables.FormFiveRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormFiveDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.getByRole('button', { name: approval_matrix_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(approval_matrix_Variables.CreateSuccess)).toBeVisible();
  });
  test("Testing Alert while creating Approval Matrix", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX}`);

    await page.getByRole("button", { name: approval_matrix_Variables.operation.create }).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).fill(approval_matrix_name);
    await page.keyboard.press(approval_matrix_Variables.Select);
    await page.keyboard.press(approval_matrix_Variables.Delete);
    await delay(3000);
    await expect(page.getByText(approval_matrix_Variables.NameAlert)).toBeVisible();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).fill(approval_matrix_name);
    await page.locator(approval_matrix_Variables.NextButtonLocator).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).fill(approval_label_one);
    await page.keyboard.press(approval_matrix_Variables.Select);
    await page.keyboard.press(approval_matrix_Variables.Delete);
    await expect(page.getByText(approval_matrix_Variables.LabelOneAlert)).toBeVisible();
    await page.locator(approval_matrix_Variables.FormOneRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormOneDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.FormOneCancelSelector).click();
    await expect(page.getByText(approval_matrix_Variables.FormAlert)).toBeVisible();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).fill(approval_label_one);
    await delay(3000);
    await page.locator(approval_matrix_Variables.FormOneRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormOneRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormOneDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusOneLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).fill(approval_label_two);
    await page.keyboard.press(approval_matrix_Variables.Select);
    await page.keyboard.press(approval_matrix_Variables.Delete);
    await expect(page.getByText(approval_matrix_Variables.LabelOneAlert)).toBeVisible();
    await page.locator(approval_matrix_Variables.FormTwoRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormTwoDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.FormTwoCancelSelector).click();
    await delay(3000);
    await expect(page.getByText(approval_matrix_Variables.FormAlert)).toBeVisible();
  });

  test("Edit Approval Matrix", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX}`);
    await page.locator(approval_matrix_Variables.PaginationLocator).click()
    await page.keyboard.press(approval_matrix_Variables.Down);
    await page.keyboard.press(approval_matrix_Variables.Down);
    await page.keyboard.press(approval_matrix_Variables.Down);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.getByText(approval_matrix_name).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).click();
    await page.keyboard.press(approval_matrix_Variables.Select);
    await page.keyboard.press(approval_matrix_Variables.Delete);
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).fill(new_approval_matrix_name);
    await page.locator(approval_matrix_Variables.NextButtonLocator).click();
    await delay(3000);
    await page.locator(approval_matrix_Variables.LabelOneLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Select);
    await page.keyboard.press(approval_matrix_Variables.Delete);
    await page.locator(approval_matrix_Variables.LabelOneLocator).fill(new_approval_label_one);
    await page.locator(approval_matrix_Variables.FormOneEditDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.LabelTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).fill(new_approval_label_two);
    await page.locator(approval_matrix_Variables.FormTwoEditDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.LabelThreeLocator).click();
    await page.locator(approval_matrix_Variables.LabelThreeLocator).fill(new_approval_label_three);
    await page.locator(approval_matrix_Variables.FormThreeEditDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.LabelFourLocator).click();
    await page.locator(approval_matrix_Variables.LabelFourLocator).fill(new_approval_label_four);
    await page.locator(approval_matrix_Variables.FormFourEditDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.LabelFiveLocator).click();
    await page.locator(approval_matrix_Variables.LabelFiveLocator).fill(new_approval_label_five);
    await page.locator(approval_matrix_Variables.FormFiveEditDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.getByRole('button', { name: approval_matrix_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(approval_matrix_Variables.UpdateSuccess)).toBeVisible();
  });

  test("Validate Approval Matrix Namae Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX}`);

    await page.getByRole("button", { name: approval_matrix_Variables.operation.create }).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).fill(new_approval_matrix_name);
    await page.locator(approval_matrix_Variables.NextButtonLocator).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).fill(approval_label_one);
    await page.locator(approval_matrix_Variables.FormOneRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormOneDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusOneLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).fill(approval_label_two);
    await page.locator(approval_matrix_Variables.FormTwoRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormTwoDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelThreeLocator).click();
    await page.locator(approval_matrix_Variables.LabelThreeLocator).fill(approval_label_three);
    await page.locator(approval_matrix_Variables.FormThreeRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormThreeDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusThreeLocator).click();
    await page.locator(approval_matrix_Variables.LabelFourLocator).click();
    await page.locator(approval_matrix_Variables.LabelFourLocator).fill(approval_label_four);
    await page.locator(approval_matrix_Variables.FormFourRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormFourDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusFourLocator).click();
    await page.locator(approval_matrix_Variables.LabelFiveLocator).click();
    await page.locator(approval_matrix_Variables.LabelFiveLocator).fill(approval_label_five);
    await page.locator(approval_matrix_Variables.FormFiveRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormFiveDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.getByRole('button', { name: approval_matrix_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(approval_matrix_Variables.MatrixNameExistAlert +`${new_approval_matrix_name}`+ approval_matrix_Variables.MatrixNameExistalert)).toBeVisible();
  });

  test("Validate Approval Label Exist Already", async ({ page }) => {
    await doLogin(page);
    await page.goto(`${getBaseUrl()}${routeslist.APPROVAL_MATRIX}`);

    await page.getByRole("button", { name: approval_matrix_Variables.operation.create }).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.NamePlaceholder).fill(approval_matrix_name);
    await page.locator(approval_matrix_Variables.NextButtonLocator).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).click();
    await page.getByPlaceholder(approval_matrix_Variables.LabelPlaceholder).fill(approval_label_one);
    await page.locator(approval_matrix_Variables.FormOneRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormOneDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusOneLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelTwoLocator).fill(approval_label_one);
    await page.locator(approval_matrix_Variables.FormTwoRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormTwoDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusTwoLocator).click();
    await page.locator(approval_matrix_Variables.LabelThreeLocator).click();
    await page.locator(approval_matrix_Variables.LabelThreeLocator).fill(approval_label_three);
    await page.locator(approval_matrix_Variables.FormThreeRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormThreeDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusThreeLocator).click();
    await page.locator(approval_matrix_Variables.LabelFourLocator).click();
    await page.locator(approval_matrix_Variables.LabelFourLocator).fill(approval_label_four);
    await page.locator(approval_matrix_Variables.FormFourRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormFourDropdownLocator).click();
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.locator(approval_matrix_Variables.PlusFourLocator).click();
    await page.locator(approval_matrix_Variables.LabelFiveLocator).click();
    await page.locator(approval_matrix_Variables.LabelFiveLocator).fill(approval_label_five);
    await page.locator(approval_matrix_Variables.FormFiveRequiredLocator).click();
    await page.locator(approval_matrix_Variables.FormFiveDropdownLocator).click();
    await delay(3000);
    await page.keyboard.press(approval_matrix_Variables.Enter);
    await page.getByRole('button', { name: approval_matrix_Variables.operation.save }).click();
    await delay(3000);
    await expect(page.getByText(approval_matrix_Variables.DuplicateApprovalLabelAlert)).toBeVisible();
  });
});