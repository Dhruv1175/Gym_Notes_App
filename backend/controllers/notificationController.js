import Notification from "../models/notificationModel.js";

export const getNotifications = async (req, res) => {
  const notifications = await Notification.find({ user: req.user._id });
  res.json(notifications);
};

export const markNotificationRead = async (req, res) => {
  const notification = await Notification.findById(req.params.id);
  if (notification.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  notification.isRead = true;
  await notification.save();
  res.json({ message: "Notification marked as read" });
};

export const deleteNotification = async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id);
  res.json({ message: "Notification deleted" });
};
